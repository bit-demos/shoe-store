import { renderHook, act } from '@testing-library/react-hooks';
import { useProduct } from './use-product';

it('should increment counter', () => {
  const { result } = renderHook(() => useProduct())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
