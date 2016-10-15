principal = {
	_varPrivada : 'variable privada objeto principal',
	metodoPublico : function (mensaje)
	{
		console.log(this._varPrivada);
		console.log(mensaje);
	}
};

principal.metodoPublico('ejecutando metodoPublico de principal');