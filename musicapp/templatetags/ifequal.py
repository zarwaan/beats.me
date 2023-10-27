from django import template

register = template.Library()

@register.filter
def ifequal(value1, value2):
    return value1==value2