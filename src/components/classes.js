// Формально КА определяется как пятёрка:
// A=(S,X,Y,\delta ,\lambda ),A=(S,X,Y,\delta ,\lambda ),
// где SS — конечное множество состояний автомата;
// X,YX,Y — конечные входной и выходной алфавиты соответственно, из которых формируются строки, считываемые и выдаваемые автоматом;
// \delta :S\times X\rightarrow S\delta :S\times X\rightarrow S — функция переходов;
// \lambda :S\times X\rightarrow Y\lambda :S\times X\rightarrow Y — функция выходов.
// Абстрактный автомат с некоторым выделенным состоянием s_{0),s_{0),, это состояние называют начальным состоянием, называется инициальным автоматом. Так как каждый КА имеет конечное число состояний, и любое из его состояний может быть назначено начальным состоянием, одному и тому же автомату соответствует NN инициальных автоматов, NN — число внутренних состояний КА. Таким образом, абстрактный КА определяет семейство инициальных автоматов. Если не указано начальное состояние, то поведение автомата всегда недетерминировано, выходное слово автомата зависит от начального состояния, поэтому полное детерминированное описание автомата будет[1]:
// A=(S,X,Y,\delta ,\lambda ,s_{0).A=(S,X,Y,\delta ,\lambda ,s_{0).
// Различают два класса КА: автоматы Мура — КА, у которых выходной сигнал зависит только от внутреннего состояния, по рисунку у автомата Мура нет связи от входа x(t)x(t) к функции выхода \lambda \lambda  и автоматы Мили — выходной сигнал зависит как от внутреннего состояния, так и от состояния входа.

//? M=(V,Q,q_{0},F,\delta ),}
// где V}V — входной алфавит (конечное множество входных символов), из которого формируются входные слова, воспринимаемые конечным автоматом;
// Q}Q — множество внутренних состояний;
// q_{0}}q_{0} — начальное состояние (q_{0}\in Q)}(q_{0}\in Q);
// F}F — множество заключительных, или конечных состояний (F\subset Q)}(F\subset Q);
// \delta }\delta  — функция переходов, определённая как отображение \delta \colon Q\times (V\cup \{\varepsilon \})\rightarrow Q}\delta \colon Q\times (V\cup \{\varepsilon \})\rightarrow Q}, такое, что \delta (q,a)=\{r\colon q\,\,{\underset {a}{\to }}\,\,r\}}\delta (q,a)=\{r\colon q\,\,{\underset {a}{\to }}\,\,r\}}, то есть значение функции переходов на упорядоченной паре (состояние, входной символ или пустая цепочка символов) есть множество всех состояний, в которые из данного состояния возможен переход по данному входному символу или пустой цепочке символов, обычно обозначаемой буквой \varepsilon .}\varepsilon .
// При анализе КА принято полагать, что конечный автомат начинает работу в некотором начальном состоянии q_{0}}q_{0}, последовательно получает по одному символу из входного слова (цепочки входных символов). Считанный символ может перевести автомат в новое состояние или не перевести в новое состояние в соответствии с функцией переходов.
// Получая входную цепочку символов x}x и делая переходы из состояния в состояние, автомат после получения последнего символа[прояснить]. входного слова окажется в некотором состоянии q'}q'}.
// Если это состояние является заключительным, то говорят, что автомат допустил слово x}x[прояснить]
