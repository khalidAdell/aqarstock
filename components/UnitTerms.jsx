import React, { useRef } from "react";
import { GrCircleAlert } from "react-icons/gr";
import { RiUserLine } from "react-icons/ri";

const UnitTerms = ({ setTermsAgree }) => {
  const checkboxInputRef = useRef(null);
  const handleSetTermsAgree = () => {
    setTermsAgree(checkboxInputRef.current.checked);
  };
  return (
    <div className="aqarstock-terms">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7">
            <h1>شروط إضافة الإعلان</h1>
            <div className="terms-body">
              <div className="terms-head">
                <div className="alert-icon">
                  <GrCircleAlert />
                </div>
                <span>
                  مخالفة شروط تطبيق و موقع عقار ستوك تعرضك للإيقاف دون سابق
                  إنذار
                </span>
              </div>
              <div className="terms-content">
                <ul>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>يقر المعلن بأحقية الإعلان و الأهلية القانونية لذلك.</p>
                  </li>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>إرفاق صور حقيقية للعقار و ليس نماذج أو مخططات.</p>
                  </li>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>
                      الدقة في تحديد الموقع و كتابة تفاصيل الإعلان و معلوماته.
                    </p>
                  </li>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>تحديد السعر إلزامي، و لا يسمح بوضع السوم.</p>
                  </li>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>عدم تكرار الإعلان و الاكتفاء بالتحديث.</p>
                  </li>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>يجب إغلاق الإعلان مباشرة بعد تأجير العقار أو بيعه.</p>
                  </li>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>
                      مطابقة الإعلان الأحكام و الأنظمة الداخلية و مسؤولية المعلن
                      التامة عن ذلك.
                    </p>
                  </li>
                  <li>
                    <div className="tc-icon">
                      <RiUserLine />
                    </div>
                    <p>
                      يتعهد المعلن بأنه يعمل مسوق مستقل أو مكتب عقاري و أنه غير
                      تابع أو موظف لأي شركة عقارية أو مطور عقاري، و يقر بتححمله
                      كافة المسؤوليات إذا تبين خلاف ذلك.
                    </p>
                  </li>
                </ul>
                <div className="terms-option">
                  <input
                    ref={checkboxInputRef}
                    type="checkbox"
                    id="termsInput"
                  />
                  <label htmlFor="termsInput"> قرأت شروط الاستخدام</label>
                </div>
                <div className="terms-footer">
                  <button onClick={handleSetTermsAgree} className="btn">
                    أتعهد و أوافق على الشروط
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitTerms;
