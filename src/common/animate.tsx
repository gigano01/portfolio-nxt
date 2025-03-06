export function animate(observer: IntersectionObserver, ref: any) {

	if (ref.current) {
		if(observer) {
			observer.observe(ref.current);
		} else {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							console.log(entry);
							entry.target.classList.remove('hidden');
							entry.target.classList.add('animated', 'bounceIn');
							observer.unobserve(entry.target);
						}
					});
				},
				{ threshold: 1 }
			);
			observer.observe(ref.current);
		}
	}

	return observer;
}

export function unanimate(observer: IntersectionObserver, ref: any) {
	if (ref.current) {
		observer.unobserve(ref.current);
	}

}