import React, { useState } from "react";
import UploadLayout from "../layouts/upload";
import Head from "next/head";
import Select from "react-select";
import { FormattedMessage } from "react-intl";
import ImageUploading from "react-images-uploading";
import { AiOutlineUpload } from "react-icons/ai";
import UnitTerms from "../components/UnitTerms";
import Default from "../layouts/default";

const AddUnit = () => {
  const [tab, setTab] = useState(1);
  const selectStyle = {
    control: (base, { isFocused }) => ({
      ...base,
      border: "1px solid var(--mainColor)",
      boxShadow: "none",
      color: "red",
      "&:hover": {
        border: "1px solid var(--mainColor)",
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "var(--mainColor)" : null,
        color: "#000",
      };
    },
  };

  const property_type_options = [
    { value: "villa", label: "مشارف العقارية" },
    { value: "twin_house", label: "عقار ستوك" },
  ];

  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const maxNumber = 10;
  const onChange = (imageList) => {
    if (!imageList.length) {
      setImage("");
      setImages([]);
    } else {
      setImage(imageList[0].file);
      setImages(imageList);
    }
  };

  const [termsAgree, setTermsAgree] = useState(false);

  return (
    <>
      <Head>
        <title>Aqarstock - Add Property</title>
      </Head>
      {!termsAgree && (
        <Default>
          <UnitTerms setTermsAgree={setTermsAgree} />
        </Default>
      )}
      {termsAgree && (
        <UploadLayout progress={tab} setTab={setTab}>
          <section className="ptb-60 add-property">
            <div className="container">
              <div className="col-12">
                <form>
                  {tab === 1 && (
                    <>
                      <div className="p-titles">
                        <h2>قسم العقار</h2>
                        <span>هذا هو نص يمكن استبدالة بكل بساطة فيما بعد</span>
                      </div>
                      <div className="stage-form-group">
                        <label>العقار معروض</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="للبيع او الايجار"
                          name="type"
                          id="property_type"
                          options={[
                            {
                              value: "all",
                              label: "الكل",
                            },
                            {
                              value: "sell",
                              label: "للبيع",
                            },
                            {
                              value: "rent",
                              label: "للايجار",
                            },
                          ]}
                        />
                      </div>
                      <div className="stage-form-group">
                        <label>السعر</label>
                        <input type="number" placeholder="..." />
                      </div>
                      <div className="stage-form-group">
                        <label>العملة</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر العملة"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                      <div className="stage-form-group">
                        <label>طريقة الدفع</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر طريقة الدفع"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                    </>
                  )}
                  {tab === 2 && (
                    <>
                      <div className="p-titles">
                        <h2>الصور</h2>
                        <span>هذا هو نص يمكن استبدالة بكل بساطة فيما بعد</span>
                      </div>
                      <div className="stage-form-group image-uploader-group">
                        <label>تحميل صور العقار</label>
                        <div className="image-uploader-area">
                          <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                          >
                            {({
                              imageList,
                              onImageUpload,
                              onImageRemoveAll,
                              onImageUpdate,
                              onImageRemove,
                              isDragging,
                              dragProps,
                            }) =>
                              // write your building UI
                              imageList.length ? (
                                <div className="upload__image-wrapper">
                                  <div className="fixed-buttons">
                                    <button
                                      type="button"
                                      style={
                                        isDragging
                                          ? { color: "red" }
                                          : undefined
                                      }
                                      onClick={onImageUpload}
                                      {...dragProps}
                                    >
                                      اضغط او اسحب الصور الي هنا للرفع
                                    </button>
                                    &nbsp;
                                    <button
                                      type="button"
                                      onClick={onImageRemoveAll}
                                    >
                                      حذف كل الصور
                                    </button>
                                  </div>
                                  {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                      <img
                                        src={image["data_url"]}
                                        alt=""
                                        width="100"
                                      />
                                      <div className="image-item__btn-wrapper">
                                        <button
                                          type="button"
                                          onClick={() => onImageUpdate(index)}
                                        >
                                          تغييرتف
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => onImageRemove(index)}
                                        >
                                          حذف
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div>
                                  <button
                                    className="be-upload"
                                    type="button"
                                    style={
                                      isDragging ? { color: "red" } : undefined
                                    }
                                    onClick={onImageUpload}
                                    {...dragProps}
                                  >
                                    <AiOutlineUpload />
                                    <span>
                                      اضغط او اسحب الصور الي هنا للرفع
                                    </span>
                                  </button>
                                </div>
                              )
                            }
                          </ImageUploading>
                        </div>
                      </div>
                    </>
                  )}
                  {tab === 3 && (
                    <>
                      <div className="p-titles">
                        <h2>مواصفات الوحدة</h2>
                        <span>هذا هو نص يمكن استبدالة بكل بساطة فيما بعد</span>
                      </div>
                      <div className="stage-form-group">
                        <label>فئة العقار</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر فئة العقار"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                      <div className="stage-form-group">
                        <label>نوع العقار</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر نوع العقار"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                      <div className="stage-form-group">
                        <label>الصالات</label>
                        <div className="custom-check">
                          <div className="cc-box">
                            <input type="radio" name="halls" />
                            <button>1</button>
                          </div>
                          <div className="cc-box active">
                            <input type="radio" name="halls" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="halls" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="halls" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="halls" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="halls" />
                            <button>اكثر</button>
                          </div>
                        </div>
                      </div>
                      <div className="stage-form-group">
                        <label>الغرف</label>
                        <div className="custom-check">
                          <div className="cc-box">
                            <input type="radio" name="rooms" />
                            <button>1</button>
                          </div>
                          <div className="cc-box active">
                            <input type="radio" name="rooms" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="rooms" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="rooms" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="rooms" />
                            <button>1</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="rooms" />
                            <button>اكثر</button>
                          </div>
                        </div>
                      </div>
                      <div className="stage-form-group">
                        <label>الدور</label>
                        <div className="custom-check">
                          <div className="cc-box">
                            <input type="radio" name="floor" />
                            <button>أرضي</button>
                          </div>
                          <div className="cc-box active">
                            <input type="radio" name="floor" />
                            <button>علوي</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="floor" />
                            <button>3</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="floor" />
                            <button>4</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="floor" />
                            <button>5</button>
                          </div>
                          <div className="cc-box">
                            <input type="radio" name="floor" />
                            <button>اكثر</button>
                          </div>
                        </div>
                      </div>
                      <div className="stage-form-group">
                        <label>الحالة</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر حالة العقار"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                      <div className="stage-form-group">
                        <label>المساحة</label>
                        <input type="number" placeholder="..." />
                      </div>
                    </>
                  )}
                  {tab === 4 && (
                    <>
                      <div className="p-titles">
                        <h2> العنوان</h2>
                        <span>هذا هو نص يمكن استبدالة بكل بساطة فيما بعد</span>
                      </div>
                      <div className="stage-form-group">
                        <label>البلد</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر البلد"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                      <div className="stage-form-group">
                        <label>المحافظة</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر المحافظة"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                      <div className="stage-form-group">
                        <label>الحي</label>
                        <Select
                          styles={selectStyle}
                          isSearchable={false}
                          instanceId="property_type"
                          placeholder="اختر الحي"
                          name="type"
                          id="property_type"
                          options={property_type_options}
                        />
                      </div>
                    </>
                  )}
                  {tab === 5 && (
                    <>
                      <div className="p-titles">
                        <h2> وصف الاعلان</h2>
                        <span>هذا هو نص يمكن استبدالة بكل بساطة فيما بعد</span>
                      </div>
                      <div className="stage-form-group">
                        <label>وصف الاعلان باللغه العربية</label>
                        <textarea placeholder="..."></textarea>
                      </div>
                      <div className="stage-form-group">
                        <label>وصف الاعلان باللغه الانجليزية</label>
                        <textarea placeholder="..."></textarea>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </section>
        </UploadLayout>
      )}
    </>
  );
};

export default AddUnit;
