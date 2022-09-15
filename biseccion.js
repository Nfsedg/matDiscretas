// function xi() {}

// function xa() {}

function fx(x) {
  return (2.75*(x**3)) + (18*(x**2)) - (21*x) - 12;
}

function bis(fx, ni, ns, err) {
  let xi;
  let xs;
  let xa;
  let fxifxa;
  let pivote;
  let error;

  xi = ni;
  xs = ns;
  xa = (ni + ns) / 2;
  
  fxifxa = fx(xi) * fx(xa);
  
  pivote = xa
  error = fx(xa)
  console.log(error)

  if(error === err) {
    return [xi, xs, xa]
  } else {
    fxifxa < 0
      ? xs = pivote
      : xi = pivote
    }
    return bis(fx, xi, xs, err)
}

console.log(bis(fx, 0, 10, 0.01));
