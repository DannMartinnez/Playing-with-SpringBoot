// Call the dataTables jQuery plugin
$(document).ready(function() {
    loadUsers();
  $('#users').DataTable();
});

async function loadUsers(){
      const request = await fetch('api/users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const users = await request.json();

      let htmlUsers = '';
      for (let user of users){
        let deleteButton = '<a href="#" onclick="deleteUser(' + user.id +')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let txtPhoneNumber = user.phoneNumber == null ? "" : user.phoneNumber;
        let aUser = '<tr><td>'+ user.id +'</td><td>'+ user.name + ' ' + user.lastname +'</td><td>'
                    + user.email +'</td><td>'
                    + txtPhoneNumber
                    +'</td><td>' + deleteButton + '</td></tr>'
      htmlUsers += aUser;
      }

      document.querySelector('#users tbody').outerHTML = htmlUsers;

}

async function deleteUser(id){

    if(!confirm('are you sure you want to delete this user?')){
        return;
    }

      const request = await fetch('api/deleteUser/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

    location.reload();
}