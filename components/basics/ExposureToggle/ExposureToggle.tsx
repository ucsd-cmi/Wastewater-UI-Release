import { customBreakPoints } from "@constants";
import React, { FunctionComponent } from "react";
import useBreakpoints from "use-window-width-breakpoints";
import styles from "./ExposureToggle.module.scss";
import { ToggleOff, ToggleOn } from "@icons";

interface ExposureToggleProps {
	displayExposure: boolean;
	displayVendingMachines: boolean;
	exposureCallback: (toggle: boolean) => void;
	vendingMachinesCallback: (toggle: boolean) => void;
}

const ExposureToggle: FunctionComponent<ExposureToggleProps> = ({
	displayExposure,
	displayVendingMachines,
	exposureCallback,
	vendingMachinesCallback
}) => {
	const breakpoint = useBreakpoints(customBreakPoints);

	const exposureClick = (toggleState:boolean) => {
		exposureCallback(toggleState);
	}

	const vendingMachinesClick = (toggleState:boolean) => {
		vendingMachinesCallback(toggleState);
	}

	const exposureOn = (
		<div className={styles.toggleContainer} onClick={() => exposureClick(false)}><ToggleOn /></div>
	)

	const exposureOff = (
		<div className={styles.toggleContainer} onClick={() => exposureClick(true)}><ToggleOff /></div>
	)

	const vendingMachinesOn = (
		<div className={styles.toggleContainer} onClick={() => vendingMachinesClick(false)}><ToggleOn /></div>
	)

	const vendingMachinesOff = (
		<div className={styles.toggleContainer} onClick={() => vendingMachinesClick(true)}><ToggleOff /></div>
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.toggleHeader}>
				Additional Information Layers
			</div>
			<div className={styles.innerWrapper}>
				<div className={styles.toggleWrapper}>
					<div className={styles.toggleLabel}>Potential COVID-19 Exposure Locations</div>
					{displayExposure ? exposureOn : exposureOff}
				</div>
				<div className={styles.toggleWrapper}>
					<div className={styles.toggleLabel}>COVID-19 Test Kit Vending Machines</div>
					{displayVendingMachines ? vendingMachinesOn : vendingMachinesOff}
				</div>
			</div>
		</div>
	);
};

export default ExposureToggle;