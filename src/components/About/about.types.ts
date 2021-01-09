export interface getShowSectionCheckpointsInput {
	moreThenFirstCheckpoint: showSectionPositions;
	belowFirstAndSecondChecpoint: showSectionPositions;
	lessThenSecondCheckpoint: showSectionPositions;
}

type showSectionPositions = {
	start: number;
	end: number;
};

export interface AboutDescriptionProps {
	headerNameTransformStyle: string;
	admissionPosition: string;
}

export interface AboutViewProps {
	aboutClassName: string;
	headerNameTransformStyle: string;
	admissionPosition: string;
}
