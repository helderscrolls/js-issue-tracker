// Event Handler for the Form Submit Button
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

// Fetching Issue Data From Local Storage
fetchIssues = () => {
  // GET Issues Data from Local Storage and Parse it from a string to a JSON file
  var issues = JSON.parse(localStorage.getItem('issues'));

  // Get the HTML <div> (id="issuesList")
  var issuesList = document.getElementById('issuesList');

  // Empty the string 
  issuesList.innerHTML = '';


  // Loops over the elements in issues 
  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    // Adds the HTML output for that element to issuesList
    issuesList.innerHTML += '<div class="well">'+
                            '<h6>Issue ID: ' + id + '</h6>'+
                            '<p><span class="label label-info">' + status + '</span></p>'+
                            '<h3>' + desc + '</h3>'+
                            '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
                            '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                            '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a> '+
                            '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                            '</div>';
  }
}