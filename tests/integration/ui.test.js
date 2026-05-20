/**
 * @jest-environment jsdom
 */

import fs from "fs";
import path from "path";

describe("계산기 UI 통합 테스트", () => {

  beforeEach(async () => {

    const html = fs.readFileSync(
      path.resolve("./src/index.html"),
      "utf8"
    );

    document.documentElement.innerHTML = html;

    jest.resetModules();

    await import("../../src/app.js");
  });

  test("더하기 버튼이 결과를 display에 표시한다", () => {

    document.getElementById("inputA").value = "7";
    document.getElementById("inputB").value = "8";

    document.getElementById("addBtn").click();

    expect(
      document.getElementById("display").textContent
    ).toBe("15");
  });

  test("초기화 버튼이 값을 리셋한다", () => {

    document.getElementById("inputA").value = "1";
    document.getElementById("inputB").value = "2";

    document.getElementById("addBtn").click();

    document.getElementById("clearBtn").click();

    expect(
      document.getElementById("display").textContent
    ).toBe("0");
  });

});