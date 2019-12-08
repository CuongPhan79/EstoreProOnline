class IndexFormProductBackendEKP extends BaseBackendEKP {
	constructor() {
		super();
		this.initialize();
	}

	initialize() {
		//DO NOT LOAD UNNESSESARY CLASS
		//Init form + list if page have BOTH  
		this.list = new FormIndexProductBackendEKP();
	}
}


class FormIndexProductBackendEKP {
	constructor(opts) {
		_.extend(this, opts);
		this.initialize();
	}

	initialize() {
		let _this = this;
		_this.initFindBox();
		_this.initBuy();
	}
	initFindBox(){
		$('#findBox').on("click", (e) => {
			let search = $('#search').val();
			// $.ajax({url: `/?search=${search}`, success: {
				
			// }})
			window.location = `/?search=${search}`;
		})
	}
	initBuy(){
		$('#btnFormProduct').on("click", (e) => {
			let user = $('#user').html();
			if(user!='nobody') {
				Cloud.buyProduct.with().protocol('jQuery').exec((err, responseBody, responseObjLikeJqXHR) => {

				});
			}else{
				window.location = `/login`;
			}
			
		})
	}
}
