import { getShowSectionCheckpointsInput } from "../components/About/about.types";

export default class ShowSection {
	getShowSectionCheckpoints({
		moreThenFirstCheckpoint,
		belowFirstAndSecondChecpoint,
		lessThenSecondCheckpoint,
	}: getShowSectionCheckpointsInput) {
		const windowHeightFirstCheckpoint = 736;
		const windowHeightSecondCheckpoint = 667;

		if (window.outerHeight > windowHeightFirstCheckpoint) return moreThenFirstCheckpoint;
		else if (window.outerHeight <= windowHeightFirstCheckpoint && window.outerHeight > windowHeightSecondCheckpoint)
			return belowFirstAndSecondChecpoint;
		else return lessThenSecondCheckpoint;
	}

	setSectionClassName(
		startPosition: number,
		endPosition: number,
		normalClassName: string,
		showClassName: string,
		setClassNameCallback: (value: string) => void
	): void {
		const scrollYPosition = window.scrollY;

		scrollYPosition <= startPosition || scrollYPosition >= endPosition
			? setClassNameCallback(normalClassName)
			: setClassNameCallback(showClassName);
	}

	changeTextPosition(scrollPositionDivider: number, setPositionCallback: (value: string) => void) {
		const scrollPosition = window.pageYOffset;

		const actualNamePosition = `translateX(${scrollPosition / scrollPositionDivider - 100}px)`;
		setPositionCallback(actualNamePosition);
	}

	changeAdmissionPosition(scrollPositionDivider: number, setPositionCallback: (value: string) => void) {
		const scrollPosition = window.pageYOffset;

		const actualAdmissionPosition = `translateX(${100 - scrollPosition / scrollPositionDivider}px)`;
		setPositionCallback(actualAdmissionPosition);
	}
}
