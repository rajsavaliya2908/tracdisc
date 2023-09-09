
import { Animated } from 'react-native';
import { useCallback, useMemo, useRef, useState } from 'react';

export function useNavigationPanel(
  pagesAmount = 10,
  onPageSelectedCallback = (position) => { }
) {
  const ref = useRef(null);

  const [activePage, setActivePage] = useState(0);
  const [isAnimated, setIsAnimated] = useState(true);
  const [overdragEnabled, setOverdragEnabled] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [scrollState, setScrollState] = useState('idle');
  const [dotsEnabled, setDotsEnabled] = useState(false);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState({ position: 0, offset: 0 });
  const onPageScrollOffset = useRef(new Animated.Value(0)).current;
  const onPageScrollPosition = useRef(new Animated.Value(0)).current;
  const onPageSelectedPosition = useRef(new Animated.Value(0)).current;

  const addLog = useCallback((log) => {
    setLogs((text) => [log, ...text].slice(0, 100));
  }, []);

  const toggleAnimation = useCallback(
    () => setIsAnimated((animated) => !animated),
    []
  );
  const toggleScroll = useCallback(
    () => setScrollEnabled((enabled) => !enabled),
    []
  );
  const toggleDots = useCallback(
    () => setDotsEnabled((enabled) => !enabled),
    []
  );
  const toggleOverdrag = useCallback(
    () => setOverdragEnabled((enabled) => !enabled),
    []
  );

  const onPageScroll = useMemo(
    () =>
      Animated.event(
        [
          {
            nativeEvent: {
              offset: onPageScrollOffset,
              position: onPageScrollPosition,
            },
          },
        ],
        {
          listener: ({ nativeEvent: { offset, position } }) => {
            addLog({
              event: 'scroll',
              text: `Position: ${position} Offset: ${offset}`,
              timestamp: new Date(),
            });
            setProgress({
              position,
              offset,
            });
          },
          useNativeDriver: true,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onPageSelected = useMemo(
    () =>
      Animated.event(
        [{ nativeEvent: { position: onPageSelectedPosition } }],
        {
          listener: ({ nativeEvent: { position } }) => {
            addLog({
              event: 'select',
              text: `Page: ${position}`,
              timestamp: new Date(),
            });
            setActivePage(position);
            onPageSelectedCallback(position);
          },
          useNativeDriver: true,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onPageScrollStateChanged = useCallback(
    (e) => {
      addLog({
        event: 'statusChanged',
        text: `State: ${e.nativeEvent.pageScrollState}`,
        timestamp: new Date(),
      });
      setScrollState(e.nativeEvent.pageScrollState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    ref,
    activePage,
    isAnimated,

    scrollState,
    scrollEnabled,
    dotsEnabled,
    progress,
    overdragEnabled,
    toggleScroll,
    toggleDots,
    toggleAnimation,
    setProgress,
    onPageScroll,
    onPageSelected,
    onPageScrollStateChanged,
    toggleOverdrag,
    logs,
  };
}
