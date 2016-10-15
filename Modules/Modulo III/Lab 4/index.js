Principal = {
	_varPrivada : 'variable privada objeto principal',
	metodoPublico : function (mensaje)
	{
		console.log(this._varPrivada);
		console.log(mensaje);
	}
};

Principal.metodoPublico('ejecutando metodoPublico de principal');