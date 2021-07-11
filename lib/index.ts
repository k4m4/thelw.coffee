type Freddo = 'f' | '';
type Type = 'e' | 'c';
type Decaf = 'de' | 'd' | '';
type Sugar = 's' | 'o' | 'l' | 'm' | 'g';
type SugarType = 'm' | 'k' | 'l' | 'a' | '';

export type Acronym = `${Freddo}${Type}${Decaf}${Sugar}${SugarType}`;
type AcronymMatchGroup = [Acronym, Freddo, Type, Decaf, Sugar, SugarType];

const INVALID_ACRONYM_ERROR = 'Invalid coffee acronym';

class InvalidAcronymError extends Error {
	constructor() {
		super(INVALID_ACRONYM_ERROR);
	}
}

const parseCoffeeAcronym = (acronym: Acronym): string => {
	const match = acronym.match(/^(f)?(e|c)(de?)?(s|o|l|m|g)(m|k|l|a)?$/i);
	if (!match) {
		throw new InvalidAcronymError();
	}

	const [, ...acronymParts] = match as AcronymMatchGroup;
	if (acronymParts.length !== 5) {
		throw new InvalidAcronymError();
	}

	return parseAcronym(...acronymParts);
};

const acronymValues = {
	freddo: {
		f: 'Freddo',
		'': '',
	},
	type: {
		e: 'Espresso',
		c: 'Capuccino',
	},
	decaf: {
		d: 'Decaf',
		de: 'Decaf',
		'': '',
	},
	sugar: {
		s: 'Σκέτο',
		o: 'Ολίγη',
		l: 'Ολίγη',
		m: 'Μέτριο',
		g: 'Γλυκό',
	},
	sugarType: {
		m: 'Μαύρη',
		k: 'Καστανή',
		l: 'Λευκή',
		a: 'Άσπρη',
		'': '',
	},
};

const parseAcronym = (
	freddo: Freddo,
	type: Type,
	decaf: Decaf,
	sugar: Sugar,
	sugarType: SugarType,
): string => {
	return [
		acronymValues.freddo[freddo],
		acronymValues.type[type],
		acronymValues.decaf[decaf],
		acronymValues.sugar[sugar],
		acronymValues.sugarType[sugarType],
	].filter(Boolean).join(' ');
};

export default parseCoffeeAcronym;
