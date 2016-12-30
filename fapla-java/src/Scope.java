import java.util.Hashtable;


public class Scope {

    private Hashtable<String, Symbol> symboleHashtable;
    private Scope parent;

    public Scope(Scope parent) {
        this.parent = parent;
        this.symboleHashtable = new Hashtable<>();
    }

    public Scope enterScope() {
        return new Scope(this);
    }

    public Scope exitScope() {
        return this.parent;
    }

    public void addSymbol(Symbol symbol) {
        symboleHashtable.put(symbol.name, symbol);
    }

    public Symbol findSymbol(String symbolName) {
        Symbol b = symboleHashtable.get(symbolName);
        if (b != null) return b;
        else if (parent != null) return parent.findSymbol(symbolName);
        return null;
    }

    public Hashtable<String, Symbol> getSymboleHashtable() {
        return symboleHashtable;
    }
}
