import { Measure } from '#imports';

export default function useMeasurement() {
  const state = useLocalStorage<Measure>('measurement', Measure.US);

  const toggle = () => {
    if (state.value === Measure.US) state.value = Measure.Metric;
    else state.value = Measure.US;
  };

  return {
    measurement: state,
    toggle,
  };
}
