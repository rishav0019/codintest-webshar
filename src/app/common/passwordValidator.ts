import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
        const hasSpecialCase=/[[$@$!%*?&]+/.test(value);
        const hasCharactor=value.length>0;
        const lengthValidator=value.length>=6;
        let validationStatus:any= {
            passwordSpecialCaseError:!hasSpecialCase,
            passwordLowerError:!hasLowerCase,
            passwordUpperError:!hasUpperCase,
            passwordNumberError:!hasNumeric,
            requiredValidation:!hasCharactor,
            lengthValidator:!lengthValidator
        }
        const passwordValid = hasCharactor &&  hasUpperCase && hasLowerCase && hasNumeric  ;

        let checkNoOfValidatorSatisfied=Object.values(validationStatus).filter(item=>item==true).length;
        validationStatus['successBarWidth']=((6-checkNoOfValidatorSatisfied)*100/6)+'%';
        console.log(validationStatus.successBarWidth,"22222222222",checkNoOfValidatorSatisfied,validationStatus)
        return  !passwordValid ? validationStatus :null
    }
}
