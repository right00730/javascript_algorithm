function reverse(str) {
  if (str.length === 1) return str;
  else {
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  }
}

reverse("awesome"); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'