function Staff(account,fullName,email,password,dayAttendance,basicSalary,position,workingHour) {
    // property
    this.account = account;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.dayAttendance = dayAttendance;
    this.basicSalary = basicSalary;
    this.position = position;
    this.workingHour = workingHour;
    this.totalAmount = 0;
    this.classify = '';

    // method

    // tính tổng lương
    this.salaryCal = function () {
        this.position = getEle('chucvu').value;
        switch (position) {
            case "Sếp":
                this.totalAmount = this.basicSalary * 3;
                break;

            case "Trưởng phòng":
                this.totalAmount = this.basicSalary * 2;
                break;

            case "Nhân viên":
                this.totalAmount = this.basicSalary * 1;
                break;
        };
    };

    // xếp loại nhân viên
    this.volumeUp = function(){
      this.classify = this.workingHour >= 192 ? 'Xuất sắc' : this.workingHour >= 176 ? 'Giỏi' : this.workingHour >= 160 ? 'Khá' : 'Trung Bình';
    };
};