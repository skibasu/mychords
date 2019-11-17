import { createChords } from "./createChords";

export const chords = ({ hash, flats }, rules = { chordType: "major" }) => {
    return [createChords(flats, rules), createChords(hash, rules)];
};
