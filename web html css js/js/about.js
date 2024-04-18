var firstname = 'vhutali';
var lastname = 'mulaudzi';
var gender = 'male';
var age = '24';
var bio = 'I am an ambitious and adaptable individual with a clear vision for my future. Equipped with a strong foundation in mathematics, science, and computer science, my commitment to personal and professional growth sets me apart as a promising talent ready to make a lasting impact in the world of computer science.';

var projects = ['User Registration and Authentication', 'Quiz Creation', 'Cybersecurity Incident Response System'];
var education = 'BSc in Computer Science 2022';
var skills = ['JavaScript', 'HTML', 'CSS', 'c++', 'Java', 'Database Management'];
var contactInformation = {
  email: 'vhutali13@gmail.com',
  phone: '0721027568',
  address: '473 EAST BLOCK, THOHOYANDOU, LIMPOPO, 0950'
};

document.getElementById('first-name').textContent = firstname;
document.getElementById('last-name').textContent = lastname;
document.getElementById('gender').textContent = gender;
document.getElementById('age').textContent =age;
projects.forEach(project => {
  const listItem = document.createElement('li');
  listItem.textContent = project;
  document.getElementById('project-list').appendChild(listItem);
});
document.getElementById('education').textContent = education;
document.getElementById('email').textContent = contactInformation.email;
document.getElementById('phone').textContent = contactInformation.phone;
document.getElementById('address').textContent = contactInformation.address;
document.getElementById('bio').textContent = bio;

var skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});