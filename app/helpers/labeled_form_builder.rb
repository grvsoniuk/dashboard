class LabeledFormBuilder < ActionView::Helpers::FormBuilder
  def text_field(attribute, options={})
    label(attribute) + super
  end

  def email_field(attribute, options={})
    opt=options.dup
    options.delete(:class)
    options.delete("icon-class")
    options.delete(:message)
    message = content_tag("b", content_tag("i", "", class: "fa fa-user txt-color-teal")+opt[:message], class: "tooltip tooltip-top-right")
  	field= super + message
  	if opt["icon-class"]
  		icon=content_tag("i", "", class: opt["icon-class"])
  		field = icon + field
  	end
    label(attribute, class: "label") + content_tag('label', field, class: opt[:class])
  end

  def password_field(attribute, options={})
    opt=options.dup
    options.delete(:class)
    options.delete("icon-class")
    options.delete(:message)
    message = content_tag("b", content_tag("i", "", class: "fa fa-user txt-color-teal")+opt[:message], class: "tooltip tooltip-top-right")
    field= super + message
    if opt["icon-class"]
      icon=content_tag("i", "", class: opt["icon-class"])
      field = icon + field
    end
    label(attribute, class: "label") + content_tag('label', field, class: opt[:class])
  end
end