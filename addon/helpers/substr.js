import { helper as buildHelper } from '@ember/component/helper';

export function substr([value, ...rest], hash) {
	if (typeof value === 'string') {
		let start = hash.start || 0;
		let length = hash.length;
		return value.substr(start, length);
	} else {
		return value;
	}
}

export default buildHelper(substr);
