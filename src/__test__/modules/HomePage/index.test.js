import { render, screen } from "@testing-library/react";
import HomePage from "../../../components/modules/HomePage";

test("renders learn react link", () => {
	const { container } = render(<HomePage />);
	expect(container).toBeInTheDocument();
});
