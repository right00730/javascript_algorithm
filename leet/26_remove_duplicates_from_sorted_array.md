# Intuition

중복 저장을 하지 않기 위해 요소 중 가장 빠른 인덱스만을 저장한다. 이를 위해 요소들을 탐색하며 해당 요소의 가장 빠른 인덱스와 현재 탐색 인덱스가 같은 경우만 저장(갱신)한다.

# Approach

1. 주어진 nums의 요소들을 하나씩 반복하며 indexOf 메서드를 사용하여 nums내 해당 요소의 가장 빠른 index를 찾는다.
2. 현재 반복문의 i와 찾아낸 가장 빠른 index가 일치할 경우 nums의 k번째에 해당 요소를 저장한 후 k값을 1 증가시킨다.
3. 가장 빠른 요소를 찾은 횟수이자 중복되지 않은 요소들의 갯수인 k를 반환한다.

# Complexity

- Time complexity:O(N)

- Space complexity: O(1)

# Code

```javascript []
function removeDuplicates(nums) {
  let expectedNums = [1];
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    const fidx = nums.indexOf(nums[i]);
    if (fidx === i) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
```
