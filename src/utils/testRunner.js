/**
 * HTMLlings Test Runner Engine
 * Sandboxes student HTML code inside a controlled DOM container,
 * parses tags, catches syntax errors, and executes test assertions.
 */

export function runExerciseTest(exercise, userCode, containerRef) {
  const logs = [];

  // Scoped Document helper pointing inside containerRef
  const scopedDoc = {
    getElementById: (id) => containerRef.querySelector(`#${id}`),
    querySelector: (selector) => containerRef.querySelector(selector),
    querySelectorAll: (selector) => containerRef.querySelectorAll(selector),
    getElementsByClassName: (className) => containerRef.getElementsByClassName(className),
    getElementsByTagName: (tagName) => containerRef.getElementsByTagName(tagName),
    createElement: (tagName) => document.createElement(tagName),
    body: containerRef,
    defaultView: window,
  };

  try {
    // Inject HTML directly into container sandbox
    containerRef.innerHTML = userCode || '';

    // Run assertion test for HTML elements
    const testResult = exercise.test(scopedDoc, userCode, containerRef);

    if (!testResult.pass) {
      return {
        passed: false,
        type: 'ASSERTION_ERROR',
        logs,
        error: testResult.error,
        formattedTerminalOutput: generateRustlingsFailOutput(exercise.id, testResult.error, logs, exercise.hint)
      };
    }

    return {
      passed: true,
      logs,
      message: testResult.message,
      formattedTerminalOutput: generateRustlingsSuccessOutput(exercise.id, testResult.message, logs)
    };
  } catch (err) {
    return {
      passed: false,
      type: 'RUNTIME_ERROR',
      logs,
      error: `Erro ao analisar HTML: ${err.message}`,
      formattedTerminalOutput: generateRustlingsFailOutput(exercise.id, `Erro ao analisar HTML: ${err.message}`, logs, exercise.hint)
    };
  }
}

function generateRustlingsFailOutput(exerciseId, errorMsg, logs, hint) {
  let output = `\x1b[31m[❌ EXER-FAIL]\x1b[0m Checking \x1b[33m${exerciseId}\x1b[0m ...\n\n`;
  output += `\x1b[31merror\x1b[0m: ${errorMsg}\n`;
  output += `  --> exercise/${exerciseId}.html\n`;
  output += `   |\n`;
  
  if (logs.length > 0) {
    output += `   = \x1b[36mConsole output captured:\x1b[0m\n`;
    logs.forEach(l => {
      output += `     > ${l}\n`;
    });
    output += `   |\n`;
  }

  output += `   = \x1b[33mdica (hint):\x1b[0m ${hint}\n\n`;
  output += `\x1b[31mProgress: ❌ Não foi possível passar nos testes de ${exerciseId}\x1b[0m\n`;
  output += `Revise seu código HTML e tente novamente!`;

  return output;
}

function generateRustlingsSuccessOutput(exerciseId, message, logs) {
  let output = `\x1b[32m[✅ PASSED]\x1b[0m Exercise \x1b[33m${exerciseId}\x1b[0m is complete!\n\n`;
  output += `\x1b[32m🎉 ${message}\x1b[0m\n`;
  
  if (logs.length > 0) {
    output += `\n\x1b[36mConsole output:\x1b[0m\n`;
    logs.forEach(l => {
      output += `  > ${l}\n`;
    });
  }

  output += `\n\x1b[32mProgress: 🚀 Você passou neste exercício!\x1b[0m\n`;
  output += `Você pode prosseguir para o próximo exercício ou continuar experimentando.`;

  return output;
}
