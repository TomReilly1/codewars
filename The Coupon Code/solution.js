function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate))
}

/////////////////////////////////////////////////////////////////////////////////////////////// 

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
  });
});

