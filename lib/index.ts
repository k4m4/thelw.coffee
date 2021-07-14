const acronymRegex = /^([1-9])?(f)?(e|c)([1-9])?(de?)?(s|o|l|m|g)(m|k|l|a)?(de?)?$/i;

type Freddo = 'f' | '';
type Type = 'e' | 'c';
type Dosage = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Decaf = 'de' | 'd' | '';
type Sugar = 's' | 'o' | 'l' | 'm' | 'g';
type SugarType = 'm' | 'k' | 'l' | 'a' | '';

export type Acronym = `${Dosage}${Freddo}${Type}${Dosage	}${Decaf}${Sugar}${SugarType}${Decaf}`;
type AcronymMatchGroup = [Acronym, Dosage, Freddo, Type, Dosage, Decaf, Sugar, SugarType, Decaf];

const INVALID_ACRONYM_ERROR = 'Invalid coffee acronym';

class InvalidAcronymError extends Error {
	constructor() {
		super(INVALID_ACRONYM_ERROR);
	}
}

const isCoffeeAcronym = (string: string): string is Acronym => {
	return acronymRegex.test(string);
};

const parseCoffeeAcronym = (acronym: string): string => {
	if (!isCoffeeAcronym(acronym)) {
		throw new InvalidAcronymError();
	}

	const match = acronym.match(acronymRegex);
	const [, ...acronymParts] = match as AcronymMatchGroup;
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
	dosage: {
		1: 'Μονό',
		2: 'Διπλό',
		3: 'Τριπλό',
		4: 'Τετραπλό',
		5: 'Πενταπλό',
		6: 'Εξαπλό',
		7: 'Εφταπλό',
		8: 'Οκταπλό',
		9: 'Εννιαπλό',
		'': '',
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
	dosageStart: Dosage,
	freddo: Freddo,
	type: Type,
	dosageMid: Dosage,
	decafMid: Decaf,
	sugar: Sugar,
	sugarType: SugarType,
	decafEnd: Decaf,
): string => {
	return [
		acronymValues.freddo[freddo],
		acronymValues.type[type],
		acronymValues.dosage[dosageStart || dosageMid],
		acronymValues.decaf[decafMid || decafEnd],
		acronymValues.sugar[sugar],
		acronymValues.sugarType[sugarType],
	].filter(Boolean).join(' ');
};

export default parseCoffeeAcronym;
