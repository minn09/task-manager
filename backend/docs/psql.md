# 📘 PostgreSQL psql Cheatsheet

## 🔹 **Iniciar sesión**

```bash
psql -U usuario -d base_de_datos
psql -U postgres
psql -h localhost -U usuario -d bd
```

### Con contraseña rápida:

```bash
PGPASSWORD="tu_pass" psql -U usuario -d bd
```

---

# 🔹 **Salir de psql**

```sql
\q
```

---

# 🔹 **Comandos básicos**

| Acción                       | Comando          |
| ---------------------------- | ---------------- |
| Ver ayuda general            | `\?`             |
| Ver comandos SQL             | `\h`             |
| Ver ayuda de un comando SQL  | `\h SELECT`      |
| Ejecutar archivo SQL         | `\i archivo.sql` |
| Ejecutar comando del sistema | `\! ls`          |

---

# 🔹 **Gestión de bases de datos**

```sql
\l          -- Listar bases de datos
\c nombre   -- Conectarse a una base
CREATE DATABASE nombre;
DROP DATABASE nombre;
```

---

# 🔹 **Gestión de tablas**

```sql
\dt         -- Listar tablas
\d tabla    -- Describir tabla
\d+ tabla   -- Describir con detalles
```

---

# 🔹 **Operaciones SQL comunes**

```sql
SELECT * FROM tabla;
INSERT INTO tabla (col1, col2) VALUES ('a', 1);
UPDATE tabla SET col='valor' WHERE id=1;
DELETE FROM tabla WHERE id=1;
```

---

# 🔹 **Ver datos de una tabla formateados**

```sql
\x on   -- Expandido ON
\x off  -- Expandido OFF
```

---

# 🔹 **Usuarios y roles**

```sql
\du                      -- Listar usuarios
CREATE USER nombre WITH PASSWORD 'pass';
ALTER USER nombre WITH SUPERUSER;
DROP USER nombre;
```

---

# 🔹 **Permisos**

```sql
GRANT ALL PRIVILEGES ON DATABASE bd TO usuario;
GRANT SELECT, INSERT ON tabla TO usuario;
REVOKE ALL PRIVILEGES ON tabla FROM usuario;
```

---

# 🔹 **Schemas**

```sql
\dn              -- Listar schemas
SET search_path TO public;
```

---

# 🔹 **Funciones útiles**

```sql
SELECT NOW();
SELECT version();
```

---

# 🔹 **Importar / Exportar**

### Importar archivo SQL:

```sql
\i ./ruta/schema.sql
```

### Exportar tabla:

```bash
psql -U user -d bd -c "COPY tabla TO STDOUT CSV HEADER" > backup.csv
```

---

# 🔹 **Atajos**

| Acción                 | Atajo      |
| ---------------------- | ---------- |
| Cancelar comando       | `Ctrl + C` |
| Salir de psql          | `Ctrl + D` |
| Repetir último comando | `\g`       |

---
