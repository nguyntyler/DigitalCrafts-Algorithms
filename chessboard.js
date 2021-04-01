/* Create a chessboard 8x8. white space = ' ', black spaces = '#' */

const chessboard = () => {
	let tile = false;
	let board = "";

	for (let i = 0; i < 64; i++) {
		if (i !== 0 && i % 8 == 0) {
			board += "\n";
			tile = !tile;
		}
		if (tile) {
			board += " ";
		} else {
			board += "#";
		}
		tile = !tile;
	}

	return board;
};

console.log(chessboard());
