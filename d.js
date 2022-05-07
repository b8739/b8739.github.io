function solution(places) {
  var answer = [];
  answer = places.map((place) => {
    //전체 대기실
    return place.some((room, rowIdx) => {
      room.split("").some((mark, colIdx, roomArr) => {
        if (mark === "X") return false;
        let peopleAround = [
          roomArr[colIdx - 1] || "",
          roomArr[colIdx + 1] || "",
          (place[rowIdx - 1] || "")[colIdx],
          (place[rowIdx + 1] || "")[colIdx],
        ].filter((mark) => mark == "P").length;
        return (
          (mark == "P" && peopleAround > 0) || (mark == "O" && peopleAround > 1)
        );
      });
    })
      ? 0
      : 1;
  });
  return answer;
}
