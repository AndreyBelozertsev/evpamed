const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

const itemList = menu.getElementsByClassName('menu-item-has-children') // Ищет все списки с нужным классом

const itemList2 = document.querySelector("#menu").getElementsByClassName('menu-item-has-children');

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  hideAllBlocksClose(itemList);
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  //link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}





function showHideMenu(itemList){
  for(let item of itemList) {
    item.querySelector('a').addEventListener('click', function(event){
      event.preventDefault();
      hideAllBlocks(itemList, item)
      if(item.querySelector('.sub-menu').style.left == '0px'){
        item.querySelector('.sub-menu').style.left = '-999em';  
      }else{
        item.querySelector('.sub-menu').style.left = '0px';
      }
    })
  }
}




showHideMenu(itemList2)


function hideAllBlocks(itemList, item){
  for(let itemNew of itemList) {
    if(itemNew != item){
      itemNew.querySelector('.sub-menu').style.left = '-999em';
    }
  }
}

function hideAllBlocksClose(itemList){
  for(let itemNew of itemList) {
      itemNew.querySelector('.sub-menu').style.left = '-999em';
  }
}


// /**
//  * File navigation.js.
//  *
//  * Handles toggling the navigation menu for small screens and enables TAB key
//  * navigation support for dropdown menus.
//  */
// ( function() {
// 	const siteNavigation = document.getElementById( 'site-navigation' );

// 	// Return early if the navigation doesn't exist.
// 	if ( ! siteNavigation ) {
// 		return;
// 	}

// 	const button = siteNavigation.getElementsByTagName( 'button' )[ 0 ];

// 	// Return early if the button doesn't exist.
// 	if ( 'undefined' === typeof button ) {
// 		return;
// 	}

// 	const menu = siteNavigation.getElementsByTagName( 'ul' )[ 0 ];

// 	// Hide menu toggle button if menu is empty and return early.
// 	if ( 'undefined' === typeof menu ) {
// 		button.style.display = 'none';
// 		return;
// 	}

// 	if ( ! menu.classList.contains( 'nav-menu' ) ) {
// 		menu.classList.add( 'nav-menu' );
// 	}

// 	// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
// 	button.addEventListener( 'click', function() {
// 		siteNavigation.classList.toggle( 'toggled' );

// 		if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
// 			button.setAttribute( 'aria-expanded', 'false' );
// 		} else {
// 			button.setAttribute( 'aria-expanded', 'true' );
// 		}
// 	} );

// 	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
// 	document.addEventListener( 'click', function( event ) {
// 		const isClickInside = siteNavigation.contains( event.target );

// 		if ( ! isClickInside ) {
// 			siteNavigation.classList.remove( 'toggled' );
// 			button.setAttribute( 'aria-expanded', 'false' );
// 		}
// 	} );

// 	// Get all the link elements within the menu.
// 	const links = menu.getElementsByTagName( 'a' );

// 	// Get all the link elements with children within the menu.
// 	const linksWithChildren = menu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

// 	// Toggle focus each time a menu link is focused or blurred.
// 	for ( const link of links ) {
// 		link.addEventListener( 'focus', toggleFocus, true );
// 		link.addEventListener( 'blur', toggleFocus, true );
// 	}

// 	// Toggle focus each time a menu link with children receive a touch event.
// 	for ( const link of linksWithChildren ) {
// 		link.addEventListener( 'touchstart', toggleFocus, false );
// 	}

// 	/**
// 	 * Sets or removes .focus class on an element.
// 	 */
// 	function toggleFocus() {
// 		if ( event.type === 'focus' || event.type === 'blur' ) {
// 			let self = this;
// 			// Move up through the ancestors of the current link until we hit .nav-menu.
// 			while ( ! self.classList.contains( 'nav-menu' ) ) {
// 				// On li elements toggle the class .focus.
// 				if ( 'li' === self.tagName.toLowerCase() ) {
// 					self.classList.toggle( 'focus' );
// 				}
// 				self = self.parentNode;
// 			}
// 		}

// 		if ( event.type === 'touchstart' ) {
// 			const menuItem = this.parentNode;
// 			event.preventDefault();
// 			for ( const link of menuItem.parentNode.children ) {
// 				if ( menuItem !== link ) {
// 					link.classList.remove( 'focus' );
// 				}
// 			}
// 			menuItem.classList.toggle( 'focus' );
// 		}
// 	}
// }() );
