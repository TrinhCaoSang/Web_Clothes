function showForm() {
    var cover = document.getElementById("user");
    cover.style.display = "flex";
    var formDN = document.getElementById("formLogin");
    formDN.style.display = "block"; 
}

function showFormDN() {
    var formDK = document.getElementById("formSignup");
    formDK.style.display = "none";
    var formDN = document.getElementById("formLogin");
    formDN.style.display = "block"; 
}

function showFormDK() {
    var formDN = document.getElementById("formLogin");
    formDN.style.display = "none";
    var formDK = document.getElementById("formSignup");
    formDK.style.display = "block"; 
}

function form__return() {
    closeErrors();
    var cover = document.getElementById("user");
    cover.style.display = "none";
    var formDK = document.getElementById("formSignup");
    formDK.style.display = "none";
    var formDN = document.getElementById("formLogin");
    formDN.style.display = "none";
    var edit1 = document.getElementById('auth-form__edit1');
    edit1.style.display = "none";
    var edit2 = document.getElementById('auth-form__edit2');
    edit2.style.display = "none";
    var edit3 = document.getElementById('auth-form__edit3');
    edit3.style.display = "none";
}

function showEdit1() {
  var cover = document.getElementById("user");
  cover.style.display = "flex";
  var edit1 = document.getElementById('auth-form__edit1');
  edit1.style.display = "block";
}

function showEdit2() {
  var cover = document.getElementById("user");
  cover.style.display = "flex";
  var edit2 = document.getElementById('auth-form__edit2');
  edit2.style.display = "block";
}

function showEdit3() {
  var cover = document.getElementById("user");
  cover.style.display = "flex";
  var edit3 = document.getElementById('auth-form__edit3');
  edit3.style.display = "block";
}

function closeErrors() {
    var fullnameError = document.getElementById('fullnameerror');
    var phoneError = document.getElementById('phoneerror');
    var emailError = document.getElementById('emailerror');
    var addressError = document.getElementById('addresserror');
    var usernameError = document.getElementById('usernameerror');
    var passwordError = document.getElementById('passworderror');
    var passwordRewriteError = document.getElementById('passwordRewriteerror');

    var username2Error = document.getElementById('username2error');
    var password2Error = document.getElementById('passwordloginerror');

    fullnameError.style.display = 'none';
    phoneError.style.display = 'none';
    emailError.style.display = 'none';
    addressError.style.display = 'none';
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    passwordRewriteError.style.display = 'none';
    username2Error.style.display = 'none';
    password2Error.style.display = 'none';
}

/* CUSTOM ALERT */
function customAlert(message, type) {
    if (type == 'success') {
        document.getElementById("customalert").style.backgroundColor = '#4CAF50';
    }
    if (type == 'warning') {
        document.getElementById("customalert").style.backgroundColor = '#f44336';
    }
    document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function () {
        x.className = x.classList.remove("show");
    }, 3500);
}




/* USER */
createAdmin();

function createAdmin() {
    if (localStorage.getItem('user') === null) {
        var userArray = [];
        var user = {
            username: 'admin',
            password: 'admin',
            fullname: 'admin',
            email: 'admin@gmail.com',
            address: '273 An Dương Vương, P3, Quận 5, TPHCM',
            phone: '0123456789',
        };
        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo rằng mã JavaScript chỉ được thực thi khi HTML đã được tải hoàn toàn
    document.getElementById('formSignup').addEventListener('submit', createUser);
    document.getElementById('formLogin').addEventListener('submit', login);
  
    // Các hàm và mã JavaScript khác ở đây
  });




/* USER SIGNUP */

document.addEventListener('DOMContentLoaded', function() {
    var fullnameInput = document.getElementById('fullname');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var addressInput = document.getElementById('address');
    var usernameInput = document.getElementById('usernameSignUp');
    var passwordInput = document.getElementById('passwordSignUp');
    var passwordRewriteInput = document.getElementById('passwordRewrite');
    var fullnameError = document.getElementById('fullnameerror');
    var phoneError = document.getElementById('phoneerror');
    var emailError = document.getElementById('emailerror');
    var addressError = document.getElementById('addresserror');
    var usernameError = document.getElementById('usernameerror');
    var passwordError = document.getElementById('passworderror');
    var passwordRewriteError = document.getElementById('passwordRewriteerror');
  
    fullnameInput.addEventListener('blur', function() {
      if (fullnameInput.value.trim() === '') {
        fullnameError.style.display = 'block';
      } else {
        fullnameError.style.display = 'none';
      }
    });
  
    phoneInput.addEventListener('blur', function() {
      if (phoneInput.value.trim() === '') {
        phoneError.style.display = 'block';
      } else {
        phoneError.style.display = 'none';
      }
    });
  
    emailInput.addEventListener('blur', function() {
      if (emailInput.value.trim() === '') {
        emailError.style.display = 'block';
      } else {
        emailError.style.display = 'none';
      }
    });
  
    addressInput.addEventListener('blur', function() {
      if (addressInput.value.trim() === '') {
        addressError.style.display = 'block';
      } else {
        addressError.style.display = 'none';
      }
    });
  
    usernameInput.addEventListener('blur', function() {
      if (usernameInput.value.trim() === '') {
        usernameError.style.display = 'block';
      } else {
        usernameError.style.display = 'none';
      }
    });
  
    passwordInput.addEventListener('blur', function() {
      if (passwordInput.value.trim() === '') {
        passwordError.style.display = 'block';
      } else {
        passwordError.style.display = 'none';
      }
    });
  
    passwordRewriteInput.addEventListener('blur', function() {
      if (passwordRewriteInput.value.trim() === '') {
        passwordRewriteError.style.display = 'block';
      } else {
        passwordRewriteError.style.display = 'none';
      }
    });
});

function createUser(e) {
    e.preventDefault();
    var fullname = document.getElementById('fullname');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var username = document.getElementById('usernameSignUp');
    var password = document.getElementById('passwordSignUp');
    var password2 = document.getElementById('passwordRewrite');
    var flag = true;

    if (!fullname.value) {
        document.getElementById('fullnameerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('fullnameerror').style.display = 'none';
    }
    if (!phone.value) {
        document.getElementById('phoneerror').style.display = 'block';
        flag = false;
    } else {
        if (isNaN(Number(phone.value))) {
            document.getElementById('phoneerror').style.display = 'block';
            document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
            flag = false;
        } else {
            if (Number(phone.value) < 100000000 || Number(phone.value) > 999999999) {
                document.getElementById('phoneerror').style.display = 'block';
                document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
                flag = false;
            } else {
                document.getElementById('phoneerror').style.display = 'none';
            }
        }
    }
    if (!email.value) {
        document.getElementById('emailerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('emailerror').style.display = 'none';
    }
    if (!address.value) {
        document.getElementById('addresserror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('addresserror').style.display = 'none';
    }
    if (!username.value) {
        document.getElementById('usernameerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('usernameerror').style.display = 'none';
    }
    if (!password.value) {
        document.getElementById('passworderror').style.display = 'block';
        flag = false;
    } else {
        if (password.value.length < 8) {
            document.getElementById('passworderror').style.display = 'block';
            document.getElementById('passworderror').innerHTML = 'Mật khẩu phải có tối thiểu 8 ký tự';
            flag = false;
        } else {
            document.getElementById('passworderror').style.display = 'none';
        }
    }
    if (password2.value != password.value) {
        document.getElementById('password2error').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('password2error').style.display = 'none';
    }
    if (flag == false) {
        return false;
    }
    
    var d = new Date();
    var datesignup = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

    var user = {
        username: username.value,
        password: password.value,
        fullname: fullname.value,
        address: address.value,
        phone: phone.value,
        email: email.value,
        datesignup: datesignup
    };
    var userArray = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < userArray.length; i++) {
        if (user.username == userArray[i].username) {
            document.getElementById('usernameerror').style.display = 'block';
            document.getElementById('usernameerror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
            username.focus();
            return false;
        } 
    }
    userArray.push(user);
    localStorage.setItem('user', JSON.stringify(userArray));
    customAlert('Bạn đã đăng ký thành công!', 'success');
    showFormDN();
}



/*USER LOGIN*/
document.addEventListener('DOMContentLoaded', function() {
  var usernameInput = document.getElementById('usernameLogin');
  var passwordInput = document.getElementById('passwordLogin');
  var usernameError = document.getElementById('username2error');
  var passwordError = document.getElementById('passwordloginerror');

  usernameInput.addEventListener('blur', function() {
    if (usernameInput.value.trim() === '') {
      usernameError.style.display = 'block';
    } else {
      usernameError.style.display = 'none';
    }
  });

  passwordInput.addEventListener('blur', function() {
    if (passwordInput.value.trim() === '') {
      passwordError.style.display = 'block';
    } else {
      passwordError.style.display = 'none';
    }
  });
});

function login(e) {
    e.preventDefault();
    var username = document.getElementById('usernameLogin').value;
    var password = document.getElementById('passwordLogin').value;
    var flag = true;
    if (!username) {
        document.getElementById('username2error').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('username2error').style.display = 'none';
    }
    if (!password) {
        document.getElementById('passwordloginerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('passwordloginerror').style.display = 'none';
    }
    if (flag == false) {
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < userArray.length; i++) {
        if (username == userArray[i].username) {
            if (password == userArray[i].password) {
                form__return();
                localStorage.setItem('userlogin', JSON.stringify(userArray[i]));
                window.location.reload(true);
                return true;
            }
        }
    }
    document.getElementById('passwordloginerror').style.display = 'block';
    document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
    return false;
}




function logout(url) {
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    location.href = url;
}








  