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
    resettogglePassword();
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
    var usernameError = document.getElementById('usernameSignuperror');
    var passwordError = document.getElementById('passwordSignuperror');
    var passwordRewriteError = document.getElementById('passwordRewriteerror');

    var username2Error = document.getElementById('usernameLoginerror');
    var password2Error = document.getElementById('passwordloginerror');

    var passwordEditerror = document.getElementById('passwordEditerror');
    var passwordRewriteEditerror = document.getElementById('passwordRewriteEditerror');
    var addressNewerror = document.getElementById('addressNewerror');
    var phoneNewerror = document.getElementById('phoneNewerror');
    
    
    fullnameError.style.display = 'none';
    phoneError.style.display = 'none';
    emailError.style.display = 'none';
    addressError.style.display = 'none';
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    passwordRewriteError.style.display = 'none';
    username2Error.style.display = 'none';
    password2Error.style.display = 'none';
    passwordEditerror.style.display = 'none';
    passwordRewriteEditerror.style.display = 'none';
    addressNewerror.style.display = 'none';
    phoneNewerror.style.display = 'none';
}

function resettogglePassword() {
  var passwordInputlogin = document.getElementById('passwordLogin');
  var togglePasswordlogin = document.getElementById('togglePassword-login');

  var passwordInputsignup = document.getElementById('passwordSignUp');
  var togglePasswordsignup = document.getElementById('togglePassword-signup');
  var passwordInputsignup2 = document.getElementById('passwordRewrite');

  if (passwordInputlogin.type === 'text') {
    passwordInputlogin.type = 'password';
    togglePasswordlogin.innerHTML = 'Hiện thị mật khẩu <i class="fas fa-eye"></i>';
  }

  if (passwordInputsignup.type === 'text' && passwordInputsignup2.type === 'text') {
    passwordInputsignup.type = 'password';
    passwordInputsignup2.type = 'password';
    togglePasswordsignup.innerHTML = 'Hiển thị mật khẩu <i class="fas fa-eye"></i>';
  }
}

/*=========================================================================*/
function togglePasswordVisibilityLogin() {
  var passwordInput = document.getElementById('passwordLogin');
  var togglePassword = document.getElementById('togglePassword-login');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.innerHTML = 'Ẩn mật khẩu <i class="fas fa-eye-slash"></i>';
  } else {
      passwordInput.type = 'password';
      togglePassword.innerHTML = 'Hiện thị mật khẩu <i class="fas fa-eye"></i>';
  }
}

function togglePasswordVisibilitySignup() {
  var passwordInput = document.getElementById('passwordSignUp');
  var togglePassword = document.getElementById('togglePassword-signup');
  var passwordInput2 = document.getElementById('passwordRewrite');
  
  if (passwordInput.type === 'password' && passwordInput2.type === 'password') {
    passwordInput.type = 'text';
    passwordInput2.type = 'text';
    togglePassword.innerHTML = 'Ẩn mật khẩu <i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    passwordInput2.type = 'password';
    togglePassword.innerHTML = 'Hiển thị mật khẩu <i class="fas fa-eye"></i>';
  }
}

function togglePasswordVisibilityEdit() {
  var passwordInput = document.getElementById('passwordEditInput');
  var togglePassword = document.getElementById('togglePassword-edit');
  var passwordInput2 = document.getElementById('passwordRewriteEditInput');
  
  if (passwordInput.type === 'password' && passwordInput2.type === 'password') {
    passwordInput.type = 'text';
    passwordInput2.type = 'text';
    togglePassword.innerHTML = 'Ẩn mật khẩu <i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    passwordInput2.type = 'password';
    togglePassword.innerHTML = 'Hiển thị mật khẩu <i class="fas fa-eye"></i>';
  }
}
/*=========================================================================*/


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
    document.getElementById('auth-form__edit1').addEventListener('submit',userEdit1);
    document.getElementById('auth-form__edit2').addEventListener('submit',userEdit2);
    document.getElementById('auth-form__edit3').addEventListener('submit',userEdit3);
  });




/* USER SIGNUP */

// khi lia chuột và nhấn ở chỗ khác sau khi nhấn vào input thì báo lỗi và  khi nhập liệu thì tb lỗi sẽ mất
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
    var usernameError = document.getElementById('usernameSignuperror');
    var passwordError = document.getElementById('passwordSignuperror');
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

    fullnameInput.addEventListener('input', function() {
      if (fullnameInput.value.trim() === '') {
          fullnameError.style.display = 'block';
      } else {
          fullnameError.style.display = 'none';
      }
  });

    phoneInput.addEventListener('input', function() {
      if (phoneInput.value.trim() === '') {
          phoneError.style.display = 'block';
      } else {
          phoneError.style.display = 'none';
      }
  });

    emailInput.addEventListener('input', function() {
      if (emailInput.value.trim() === '') {
          emailError.style.display = 'block';
      } else {
          emailError.style.display = 'none';
      }
  });

    addressInput.addEventListener('input', function() {
      if (addressInput.value.trim() === '') {
          addressError.style.display = 'block';
      } else {
          addressError.style.display = 'none';
      }
  });

    usernameInput.addEventListener('input', function() {
      if (usernameInput.value.trim() === '') {
          usernameError.style.display = 'block';
      } else {
          usernameError.style.display = 'none';
      }
  });

    passwordInput.addEventListener('input', function() {
      if (passwordInput.value.trim() === '') {
          passwordError.style.display = 'block';
      } else {
          passwordError.style.display = 'none';
      }
  });

    passwordRewriteInput.addEventListener('input', function() {
      if (passwordRewriteInput.value.trim() === '') {
          passwordRewriteError.style.display = 'block';
      } else {
          passwordRewriteError.style.display = 'none';
      }
  });
});


/*=================================================================================================*/
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
/*===============================================================================================*/

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
            if (Number(phone.value) < 1000000000 || Number(phone.value) > 9999999999) {
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
    } else if (!validateEmail(email.value)) {
        document.getElementById('emailerror').style.display = 'block';
        document.getElementById('emailerror').innerHTML = 'Địa chỉ email không hợp lệ';
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
            document.getElementById('passwordSignuperror').style.display = 'block';
            document.getElementById('passwordSignuperror').innerHTML = 'Mật khẩu phải có tối thiểu 8 ký tự';
            flag = false;
        } else {
            document.getElementById('passwordSignuperror').style.display = 'none';
        }
    }
    if (!password2.value) {
        document.getElementById('passwordRewriteerror').style.display = 'block';
        flag = false;
    } else { 
      if (password2.value != password.value ) {
        document.getElementById('passwordRewriteerror').style.display = 'block';
        document.getElementById('passwordRewriteerror').innerHTML = 'Mật khẩu không trùng khớp';
        flag = false;
      } else {
        document.getElementById('passwordRewriteerror').style.display = 'none';
    }
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

// khi lia chuột và nhấn ở chỗ khác sau khi nhấn vào input thì báo lỗi và  khi nhập liệu thì tb lỗi sẽ mất
document.addEventListener('DOMContentLoaded', function() {
  var usernameInput = document.getElementById('usernameLogin');
  var passwordInput = document.getElementById('passwordLogin');
  var usernameError = document.getElementById('usernameLoginerror');
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

  usernameInput.addEventListener('input', function() {
    if (usernameInput.value.trim() === '') {
      usernameError.style.display = 'block';
    } else {
      usernameError.style.display = 'none';
    }
  });

  passwordInput.addEventListener('input', function() {
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
        document.getElementById('usernameLoginerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('usernameLoginerror').style.display = 'none';
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


















/*Form chỉnh sửa thông tin*/
document.addEventListener('DOMContentLoaded', function() {
    var passwordEditInput = document.getElementById('passwordEditInput');
    var passwordEditerror = document.getElementById('passwordEditerror');
    var passwordRewriteEditInput = document.getElementById('passwordRewriteEditInput');
    var passwordRewriteEditerror = document.getElementById('passwordRewriteEditerror');
    var addressNewInput = document.getElementById('addressNewInput');
    var addressNewerror = document.getElementById('addressNewerror');
    var phoneNewInput = document.getElementById('phoneNewInput');
    var phoneNewerror = document.getElementById('phoneNewerror');

    passwordEditInput.addEventListener('blur',function() {
      if(passwordEditInput.value.trim() === '') {
        passwordEditerror.style.display = 'block';
      } else {
        passwordEditerror.style.display = 'none';
      }
    })
    passwordRewriteEditInput.addEventListener('blur',function() {
      if(passwordRewriteEditInput.value.trim() === '') {
        passwordRewriteEditerror.style.display = 'block';
      } else {
        passwordRewriteEditerror.style.display = 'none';
      }
    })
    addressNewInput.addEventListener('blur',function() {
      if(addressNewInput.value.trim() === '') {
        addressNewerror.style.display = 'block';
      } else {
        addressNewerror.style.display = 'none';
      }
    })
    phoneNewInput.addEventListener('blur',function() {
      if(phoneNewInput.value.trim() === '') {
        phoneNewerror.style.display = 'block';
      } else {
        phoneNewerror.style.display = 'none';
      }
    })

    passwordEditInput.addEventListener('input',function() {
      if(passwordEditInput.value.trim() === '') {
        passwordEditerror.style.display = 'block';
      } else {
        passwordEditerror.style.display = 'none';
      }
    })
    passwordRewriteEditInput.addEventListener('input',function() {
      if(passwordRewriteEditInput.value.trim() === '') {
        passwordRewriteEditerror.style.display = 'block';
      } else {
        passwordRewriteEditerror.style.display = 'none';
      }
    })
    addressNewInput.addEventListener('input',function() {
      if(addressNewInput.value.trim() === '') {
        addressNewerror.style.display = 'block';
      } else {
        addressNewerror.style.display = 'none';
      }
    })
    phoneNewInput.addEventListener('input',function() {
      if(phoneNewInput.value.trim() === '') {
        phoneNewerror.style.display = 'block';
      } else {
        phoneNewerror.style.display = 'none';
      }
    })
});


function userEdit1(e) {
  e.preventDefault();
  var passwordEditInput = document.getElementById('passwordEditInput');
  var passwordRewriteEditInput = document.getElementById('passwordRewriteEditInput');
  var flag = true;

  if (!passwordEditInput.value) {
    document.getElementById('passwordEditerror').style.display = 'block';
    flag = false;
} else {
    if (passwordEditInput.value.length < 8) {
        document.getElementById('passwordEditerror').style.display = 'block';
        document.getElementById('passwordEditerror').innerHTML = 'Mật khẩu phải có tối thiểu 8 ký tự';
        flag = false;
    } else {
        document.getElementById('passwordEditerror').style.display = 'none';
    }
}
if (!passwordRewriteEditInput.value) {
    document.getElementById('passwordRewriteEditerror').style.display = 'block';
    flag = false;
} else { 
  if (passwordRewriteEditInput.value != passwordEditInput.value ) {
    document.getElementById('passwordRewriteEditerror').style.display = 'block';
    document.getElementById('passwordRewriteEditerror').innerHTML = 'Mật khẩu không trùng khớp';
    flag = false;
  } else {
    document.getElementById('passwordRewriteEditerror').style.display = 'none';
  }
}
if (flag == false) {
  return false;
}

}

function userEdit2(e) {
  e.preventDefault();
  var addressNewInput = document.getElementById('addressNewInput');
  var flag = true;

if (!addressNewInput.value) {
  document.getElementById('addressNewerror').style.display = 'block';
  flag = false;
} else {
  document.getElementById('addressNewerror').style.display = 'none';
}
if (flag == false) {
  return false;
}

}

function userEdit3(e) {
  e.preventDefault();
  var phoneNewInput = document.getElementById('phoneNewInput');
  var flag = true;

if (!phoneNewInput.value) {
  document.getElementById('phoneNewerror').style.display = 'block';
  flag = false;
} else {
  if (isNaN(Number(phoneNewInput.value))) {
      document.getElementById('phoneNewerror').style.display = 'block';
      document.getElementById('phoneNewerror').innerHTML = 'Số điện thoại không hợp lệ';
      flag = false;
  } else {
      if (Number(phoneNewInput.value) < 1000000000 || Number(phoneNewInput.value) > 9999999999) {
          document.getElementById('phoneNewerror').style.display = 'block';
          document.getElementById('phoneNewerror').innerHTML = 'Số điện thoại không đúng';
          flag = false;
      } else {
          document.getElementById('phoneNewerror').style.display = 'none';
      }
  }
}
if (flag == false) {
  return false;
}

}