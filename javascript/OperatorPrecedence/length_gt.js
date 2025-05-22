// Commit: https://github.com/seanrose/broadcast/commit/1e5432363fcc186ca15212828f76e97d0da0684c#diff-4ec33cd1d39383864cb6d683dec433993a536130fede1fc8eec51abd083795cfL7
// Model .227
Presentations = new Meteor.Collection('presentations');

Presentations.allow({
	update: function(userId, doc, fieldNames, modifier) {
		return (
			// Must have both page and presenterId field
			!_.without(fieldNames, 'page', 'presenterId').length > 0
			// Only allow $set
			&& _.has(modifier, '$set')
			// Only allow $set if presenterId is known
			&& modifier.$set.presenterId === doc.presenterId
		);
	}
});
// Only modifications are allowed on the client
Presentations.deny({
    // Deny insert of presenations
    insert: function() {
    	return true;
    },
    // Deny remove of presentations
    remove: function() {
   		return true;
    }
});
