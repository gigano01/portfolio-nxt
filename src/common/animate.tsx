export function createObserver(animationName: string) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(entry);
					entry.target.classList.remove('hidden');
					entry.target.classList.add('animated', animationName);
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 1 }
	);
	return observer;
}

export function animate(observer: IntersectionObserver | null, ref: any, animationName: string) {

	if (ref.current) {
		if(!observer) observer = createObserver(animationName);
		observer.observe(ref.current);
	}

	return observer;
}

export function unanimate(observer: IntersectionObserver | null, ref: any) {
	if (ref.current && observer) {
		observer.unobserve(ref.current);
	}

}