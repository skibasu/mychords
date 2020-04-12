import { createChords } from "./createChords";

export const chords = ({ hash, flats }, rules = { chordType: "major" }) => {
    return [createChords(flats, rules, 'flats'), createChords(hash, rules, 'hash')];
};
