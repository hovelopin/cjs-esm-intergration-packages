/**
 * 숫자만 남기는 함수
 *
 * @param {string} param2 - 숫자 형태의 문자열
 * @return {string} 숫자만 추출한 문자열 반환
 *
 */

export const leaveNumberString = (value: string) => {
  console.log('하이하이하이하이');
  return value.replace(/[^\d]/g, "") || "";
};
