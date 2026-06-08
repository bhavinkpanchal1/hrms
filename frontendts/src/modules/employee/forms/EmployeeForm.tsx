import Input from "../../../shared/components/Input";
import Select from "../../../shared/components/Select";
import { employeeFormField } from "../constants/employeeFormFields";


function EmployeeForm() {
  return (
    <fieldset>
      <div className="mt-4 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {employeeFormField.map((field) => (
            <label>
              <span>{field.label}</span>
              {field.type === "select" ? (
                <Select name={field.name} options={field.options ?? []} />
              ) : (
                <Input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              )}
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

// <label className="block">
//   <span>{{label}}</span>
//   <span className="relative mt-1.5 flex flex-wrap">
//     <Input
//       id="emp_id"
//       type={{type}}
//       name={{name}}
//       placeholder={{placeholder}}
//       value=""
//       className="form-input peer w-full rounded-lg border border-slate-300
//                     bg-transparent px-3 py-2 placeholder:text-slate-400/70
//                     hover:border-slate-400 focus:border-primary
//                     dark:border-navy-450 dark:hover:border-navy-400
//                     dark:focus:border-accent"
//     />
//     <span
//       className="form-icon pointer-events-none absolute flex h-full w-10 items-center
//                    justify-center text-slate-400 peer-focus:text-primary
//                    dark:text-navy-300 dark:peer-focus:text-accent"
//     >
//       <i className="fa fa-id-badge"></i>
//     </span>
//   </span>
// </label>

export default EmployeeForm;
