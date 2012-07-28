var db = require('dirty')('user.db');

var model = {
	fetch: function(database, userid)
	{
		var id = this.id(userid);
		var m = database.get(id);
		if (!m)
			m = { distance: 0, points: 0, position: { x:0, y:0, z:0 } };

		return m;
	},
	save: function(database, userid, model)
	{
		var id = this.id(userid);
		database.set(id, model);
	}
	id: function(userid)
	{
		return userid.toLowerCase();
	}
};

exports.init = function()
{
	this.log.info('Registering slmbr plugin');

	this.client.isiFlags |= this.insim.ISF_MCI;

	this.client.on('state:connnew', function(ucid)
	{
		var c = this.client.state.getConnByUcid(ucid);

		if (!c)
			continue;

		var m = model.fetch(db, c.uname);

		// todo - welcome - depends buttons.js
		// show current points
	});

	this.client.on('state:plyrupdate', function(plids)
	{
		for (var i in plids)
		{
			var p = this.client.state.getPlyrByPlid(plids[i]);
			if (!p)
				continue;

			var p = this.client.state.getPlyrByPlid(plid);

			if (!p)
				continue;

			var c = this.client.state.getConnByUcid(p.ucid);

			if (!c)
				continue;

			var m = model.fetch(db, c.uname);

			if (m.position.x != 0 && m.position.y != 0 && m.position.z != 0)
			{
				var x = m.position.x - p.x;
				var y = m.position.y - p.y;
				
				var xy = x^2 + y^2;
				var d = Math.abs(Math.sqrt(xy^2 + z^2));

				if (distance <= 10)
					m.points += 1;

				if ((m.points % 10) == 0)
					// send message to user of their current points
			}

			// update position
			m.position.x = p.x;
			m.position.y = p.y;
			m.position.z = p.z;

			// save
			model.save(db, c.uname, m);
		}
	});
}
