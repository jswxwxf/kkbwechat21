import { FormState, FieldState } from 'formstate';

// import { validate } from 'shared/utility';
import { userActions } from 'shared/actions';
import { UserStore } from 'shared/stores';

export default class JobeduForm {

  companyType = new FieldState(UserStore.userState.detail.company_type);
  companyName = new FieldState(UserStore.userState.detail.company_name);
  jobTitle = new FieldState(UserStore.userState.detail.job_title);

  degree = new FieldState(UserStore.userState.detail.degree);
  school = new FieldState(UserStore.userState.detail.school);
  majorIn = new FieldState(UserStore.userState.detail.major_in);

  form = new FormState({
    companyType: this.companyType,
    companyName: this.companyName,
    jobTitle: this.jobTitle,
    degree: this.degree,
    school: this.school,
    majorIn: this.majorIn
  });

  toJson() {
    return {
      company_type: this.companyType.$,
      company_name: this.companyName.$,
      job_title: this.jobTitle.$,
      degree: this.degree.$,
      school: this.school.$,
      major_in: this.majorIn.$
    }
  }

  handleSubmit = async () => {
    const res = await this.form.validate();
    if (res.hasError) return;
    userActions.updateDetail(this.toJson());
  };

};

