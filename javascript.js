const submitButton_0 = document.getElementById('button_0');
const submitButton_1 = document.getElementById('button_1');
const submitButton_2 = document.getElementById('button_2');
const submitButton_3 = document.getElementById('button_3');
const submitButton_4 = document.getElementById('button_4');
const submitButton_10 = document.getElementById('button_10');
const submitButton_11 = document.getElementById('button_11');
const submitButton_12 = document.getElementById('button_12');
const submitButton_13 = document.getElementById('button_13');
const submitButton_14 = document.getElementById('button_14');
var json_saved;
var sellvalue = [];

const url = new URL(
	'https://script.google.com/macros/s/AKfycbyXBSFRpsR0aiQZl8PjMhuD0sSuIgz1unUhFLlRnTHlyA2qzsoPlPOCaHPk6TYbiTeJPQ/exec');
// url.searchParams.append('ID', uid);

window.onload = function onLoad() {
	url.searchParams.set('type', 'fetch');
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			// alert(json[0]["Description"]);
			reflesh(json);
		})
};

document.getElementById('cost_0').onchange = function () {
	reflesh(json_saved);
};
document.getElementById('cost_1').onchange = function () {
	reflesh(json_saved);
};
document.getElementById('cost_2').onchange = function () {
	reflesh(json_saved);
};
document.getElementById('cost_3').onchange = function () {
	reflesh(json_saved);
};
document.getElementById('cost_4').onchange = function () {
	reflesh(json_saved);
};

submitButton_0.onclick = () => {
	url.searchParams.set('type', 'record');
	url.searchParams.set('item', '0');
	url.searchParams.set('value', document.getElementById('cost_0').value);

	submitButton_0.disabled = 'disabled';
	submitButton_0.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_0.disabled = null;
			submitButton_0.value = '売上';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_1.onclick = () => {
	url.searchParams.set('type', 'record');
	url.searchParams.set('item', '1');
	url.searchParams.set('value', document.getElementById('cost_1').value);

	submitButton_1.disabled = 'disabled';
	submitButton_1.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_1.disabled = null;
			submitButton_1.value = '売上';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_2.onclick = () => {
	url.searchParams.set('type', 'record');
	url.searchParams.set('item', '2');
	url.searchParams.set('value', document.getElementById('cost_2').value);

	submitButton_2.disabled = 'disabled';
	submitButton_2.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_2.disabled = null;
			submitButton_2.value = '売上';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_3.onclick = () => {
	url.searchParams.set('type', 'record');
	url.searchParams.set('item', '3');
	url.searchParams.set('value', document.getElementById('cost_3').value);

	submitButton_3.disabled = 'disabled';
	submitButton_3.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_3.disabled = null;
			submitButton_3.value = '売上';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_4.onclick = () => {
	url.searchParams.set('type', 'record');
	url.searchParams.set('item', '4');
	url.searchParams.set('value', document.getElementById('cost_4').value);

	submitButton_4.disabled = 'disabled';
	submitButton_4.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_4.disabled = null;
			submitButton_4.value = '売上';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_10.onclick = () => {
	url.searchParams.set('type', 'delete');
	url.searchParams.set('item', '0');
	if (json_saved[0]['num'] == 0) return;
	submitButton_10.disabled = 'disabled';
	submitButton_10.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_10.disabled = null;
			submitButton_10.value = '取消';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_11.onclick = () => {
	url.searchParams.set('type', 'delete');
	url.searchParams.set('item', '1');
	if (json_saved[1]['num'] == 0) return;
	submitButton_11.disabled = 'disabled';
	submitButton_11.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_11.disabled = null;
			submitButton_11.value = '取消';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_12.onclick = () => {
	url.searchParams.set('type', 'delete');
	url.searchParams.set('item', '2');
	if (json_saved[2]['num'] == 0) return;
	submitButton_12.disabled = 'disabled';
	submitButton_12.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_12.disabled = null;
			submitButton_12.value = '取消';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_13.onclick = () => {
	url.searchParams.set('type', 'delete');
	url.searchParams.set('item', '3');
	if (json_saved[3]['num'] == 0) return;
	submitButton_13.disabled = 'disabled';
	submitButton_13.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_13.disabled = null;
			submitButton_13.value = '取消';
		})
		.catch(function (err) {
			alert(err);
		});
};

submitButton_14.onclick = () => {
	url.searchParams.set('type', 'delete');
	url.searchParams.set('item', '4');
	if (json_saved[4]['num'] == 0) return;
	submitButton_14.disabled = 'disabled';
	submitButton_14.value = '送信中';
	fetch(url, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(json => {
			reflesh(json);
			submitButton_14.disabled = null;
			submitButton_14.value = '取消';
		})
		.catch(function (err) {
			alert(err);
		});
};

function reflesh(json) {
	json_saved = json;
	for (var i = 0; i < 5; i++) {
		sellvalue[i] = document.getElementById('cost_' + i).value;
	}
	for (var i = 0; i < 5; i++) {
		document.getElementById('num_' + i.toString()).innerHTML = json[i]['num']
		document.getElementById('value_' + i.toString()).innerHTML = '¥' + `${json[i]['sell'].toLocaleString()}`;
	}
	var num_s = 0, value_s = 0, objective_s = 0, estimated = 0;
	for (var i = 0; i < 5; i++) {
		num_s += Number(json[i]['num']);
		value_s += Number(json[i]['sell']);
	}
	document.getElementById('num_s').innerHTML = num_s;
	document.getElementById('value_s').innerHTML = '¥' +
		`${value_s.toLocaleString()}`;
	document.getElementById('cream').innerText = (num_s / 320 * 40).toFixed(1) + " 本";
}


const $wrap = document.querySelector('.number-spinner-wrap')
const $input = $wrap.querySelector('input')
$wrap.querySelector('.spinner-down').onclick = () => {
	$input.stepDown()
};
$wrap.querySelector('.spinner-up').onclick = () => {
	$input.stepUp()
};
