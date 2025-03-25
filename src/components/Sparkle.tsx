"use client";
import { animate, unanimate } from "@/common/animate";
import { useRef, useEffect } from "react";
import styles from "@/styles/modules/about.module.css";

export default function Sparkle({className, id}: {className: string, id: string}) {
	const sparkle = useRef(null);

	useEffect(() => {
		const observer = animate(null, sparkle, "bounceIn");

		return () => {
			// cleanup
			unanimate(observer, sparkle);
		};
	}, []);

	return (<div className={[styles.aboutSparkle, className, "hidden"].join(" ")} id={id} ref={sparkle}>
		<img src="sparkle.png" alt="sparkle" />
	</div>);
}