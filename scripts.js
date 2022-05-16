const hamburgerMenuToggle = () => {
  const btn = document.querySelector('.mobile-menu-button');
  const menu = document.querySelector('.mobile-menu');
  const hamburger = document.querySelector('.hamburger');

  btn.addEventListener('click', () => {
    hamburger.classList.toggle('text-sky-600');
    menu.classList.toggle('hidden');
  });
};

const loadJSON = (callback) => {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', 'local.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

const initJSON = () => {
  loadJSON(function (response) {
    var actualJSON = JSON.parse(response);
    for (var item in actualJSON) {
      for (var i = 0; i < actualJSON[item].length; i++) {
        createProductCard(actualJSON[item][i]);
      }
    }
  });
};

const createProductCard = (product) => {
  const card = document.querySelector('.products');
  let cardContent = `<div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
	<!-- Column contents -->
	<div class="flex flex-col flex-1 px-8 py-4 bg-offwhite rounded-lg shadow-lg">
		<div class="flex-1">

			<small class="text-gray-600 text-sm underline">${product.category}</small>
			<img src="${product.image}" alt="board1"
				class="rounded-t-3x border-2 border-gray-300 shadow-lg mb-4">
			<h3 class="text-2xl font-semibold text-center">
				<a href="product.html" class="text-sky-600 hover:text-sky-800 my-4">
					<span class="font-semibold">${product.name}</span>
				</a>
			</h3>
			<p class="text-gray-600 text-center mt-4 underline">Description:</p>
			<p class="text-gray-600 mb-4 text-center">${product.description}</p>
		</div>
		<p class="text-gray-800 text-3xl self-end">
			<span class="font-semibold">${product.price}</span>
		</p>
		<a href="#"
			class="mt-6 self-center px-20 py-3 text-white font-semibold bg-sky-400 hover:bg-sky-600 rounded-md shadow-sm">
			Add to Cart
		</a>
	</div>
</div>`;
  card.innerHTML += cardContent;
};

const getProducts = () => {
  var nameValue = document.getElementById('uniqueID').value;
  console.log(nameValue);
};
