import { logRoles, render, screen } from "@testing-library/react";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BanePage from "@/pages/bands/[bandId]";

test("Band page displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BanePage band={fakeBands[0]} error={null} />);

  // NOTE: 使用 getByRole 取得當前頁面 Accessibility 區域名稱為 heading 標題的元素
  const heading = screen.getByRole("heading", {
    name: /The Wandering Bunnies/i,
  });

  expect(heading).toBeInTheDocument();
});

// Band 錯誤畫面
test("Band page displays error", async () => {
  await render(<BanePage band={null} error="Everything is fine" />);

  const error = screen.getByRole("heading", {
    name: /everything is fine/i,
  });

  expect(error).toBeInTheDocument();
});
