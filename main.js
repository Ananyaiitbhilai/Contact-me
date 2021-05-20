document.getElementById('reviewInputForm').addEventListener('submit', savereview);

function savereview(e) {
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueemail = document.getElementById('emailInput').value;
  var issueId = chance.guid();
 

  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    email: issueemail,
    
  }

  
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  

  document.getElementById('reviewInputForm').reset();

  fetchreviews();

  e.preventDefault();
}


function deletereview(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchreviews();
}

function fetchreviews() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var reviewsListe = document.getElementById('reviewsList');

  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var email = issues[i].email;
    var status = issues[i].status;

    reviewsList.innerHTML +=   '<div class="well">'+
                              '<h6> User id: ' + id + '</h6>'+
                              '<h3>' + desc + '</h3>'+
                              '<p>' + email + '</p>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                              '<a href="#" onclick="deletereview(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '</div>';
  }
}
