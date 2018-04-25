var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '2985',
	'X-Auth-Token': '56493d33a7c4500145f865ab2bbe89be'
};

$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function(column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);

		function setupCards(col, cards) {
			cards.forEach(function(card) {
				var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
				col.createCard(cardObj);
			})
		}
	});
}