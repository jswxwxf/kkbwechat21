import { FormState, FieldState } from 'formstate';
import _ from 'lodash';

// import { validate } from 'shared/utility';
import { userActions } from 'shared/actions';
import { UserStore } from 'shared/stores';

export default class HomeForm {

  marriageStatus = new FieldState(UserStore.userState.detail.marriage_status);
  childrenBoys = new FieldState(UserStore.userState.detail.boys);
  childrenGirls = new FieldState(UserStore.userState.detail.girls);

  form = new FormState({
    marriageStatus: this.marriageStatus,
    childrenBoys: this.childrenBoys,
    childrenGirls: this.childrenGirls
  });

  toJson() {
    return {
      marriage_status: this.marriageStatus.$,
      children: _.compact([this.childrenBoys.$ || '0男', this.childrenGirls.$ || '0女']).join('')
    }
  }

  handleSubmit = async () => {
    const res = await this.form.validate();
    if (res.hasError) return;
    userActions.updateDetail(this.toJson());
  };

};

